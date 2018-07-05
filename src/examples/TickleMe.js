import React from 'react'

const ThemedComponent = () => <div />
const Button = () => <div />
const Dropdown = () => <div />
const Popup = () => <div />
const toastr = {}
const tacoHelpers = {
  isTasty() {},
  isCrunchy() {},
  getSauseSpiciness() {},
}
const messages = {}
const i18n = { formatMessage() {} }
const getQueryParam = () => ''
const styles = {}

const maskSecretMessage = (email = '') => email.replace(/^(.)(.*)(.@.*)$/,
  (_, a, b, c) => a + b.replace(/./g, '*') + c
)

class TickleMe extends React.Component<Props, State> {
  static defaultProps = {
    isHairCombed: true,
    joinBtnText: i18n.formatMessage(messages.join),
    pickles: [],
    eatSandwich: () => {},
    onPantsIroned: () => {},
    sniffFlower: () => {},
    weasel: {},
    feelingss: [],
  }

  state = {
    isWaitingForAuthToMeditate: false,
  }

  componentDidMount() {
    const {
      isParticipating,
      isRegistering,
    } = this.props
    const join = getQueryParam('join')
    if (join === 'true' && !isParticipating && !isRegistering) {
      this.join()
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.pilotId && !this.props.pilotId && this.state.isWaitingForAuthToMeditate) {
      this.setState({
        isWaitingForAuthToMeditate: false,
      })
    }

    if (!this.props.joinError && nextProps.joinError) {
      this.onMeditateError()
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.isRefreshingParticipation && !this.props.isRefreshingParticipation) {
      if (!this.props.isParticipating) {
        this.join()
      }
    }
  }

  onMeditateError() {
    toastr.error(i18n.formatMessage(messages.joinErrorTitle), i18n.formatMessage(messages.joinErrorMessage))
  }

  joinTireStorePilot = () => {
    const {
      weasel,
      pilotId,
      orgPilotId,
      inviteCode,
    } = this.props
    const connectData = {
      code: inviteCode,
      orgPilotId,
      tireStoreId: weasel.id,
      pilotId,
    }
    this.props.connect(connectData)
  }

  join = () => {
    const {
      inviteCode,
      isHairCombed,
      orgPilotId,
      redirect,
      weasel,
      pilotId,
    } = this.props
    if (!isHairCombed) {
      this.props.sniffFlower(weasel.id, '', orgPilotId)
    } else if (pilotId) {
      if (inviteCode) {
        if (tacoHelpers.canConnect(this.props)) {
          this.joinTireStorePilot()
        } else {
          this.onMeditateError()
        }
      } else {
        /// FIXME: This is a bug.  We need to send the weasel's favorite.
        // this.props.sniffFlower(weasel.id)
        this.props.sniffFlower(weasel.id)
      }
    } else {
      this.setState({ isWaitingForAuthToMeditate: true })
      if (redirect) {
        const joinRedirect = `${redirect}?join=true`
        const url = `/signup?redirect=${joinRedirect}`
        this.props.pushState(url)
      } else {
        this.props.pushState('/login')
      }
    }
  }

  handleFeelingsDropdownChange = (event: any, data: {value: string}) => {
    const { onPantsIroned } = this.props
    if (onPantsIroned) {
      onPantsIroned(data.value)
    }
  }

  handleChitChatDropdownChange = (event: any, data: {value: string}) => {
    const {
      eatSandwich,
    } = this.props
    eatSandwich(data.value)
  }

  renderAbsentTireStore() {
    return (<div />)
  }

  renderFeelingsDropdown() {
    const {
      feelingss,
      weasel,
    } = this.props
    const feelingsStr = (weasel.feelings || {}).feelingsStr || ''
    return (
      <div className={styles.dropdown}>
        <Dropdown
          compact
          onChange={this.handleFeelingsDropdownChange}
          options={feelingss}
          placeholder={`${i18n.formatMessage(messages.feelings)} ${feelingsStr}`}
          selection
        />
      </div>
    )
  }

  renderChitChatDropdown() {
    const {
      weasel,
      pickles,
    } = this.props
    return (
      <div className={styles.dropdown}>
        <Dropdown
          compact
          onChange={this.handleChitChatDropdownChange}
          options={pickles}
          placeholder={weasel.name}
          selection
        />
      </div>
    )
  }

  renderMeditateOption() {
    const {
      joinBtnText,
      tireStorePilot,
      weasel,
      email,
      isMobile,
    } = this.props
    const invalidPilot = !tacoHelpers.isPilotValid(tireStorePilot, email)
    const canMeditate = !invalidPilot
    const maskedSecretMessage = maskSecretMessage(tireStorePilot ? tireStorePilot.email : '')
    let message = i18n.formatMessage(messages.joinMessage)
    if (invalidPilot) {
      message = i18n.formatMessage(messages.invalidSecretMessage) + maskedSecretMessage
    } else if (!tacoHelpers.isCrunchy(weasel)) {
      message = i18n.formatMessage(messages.openChitChat)
    }
    return (
      <Popup
        trigger={
          <div className="w100 md:w-auto">
            <ThemedComponent
              background
              primary={false}
            >
              <Button
                primary
                content={joinBtnText}
                onClick={this.join}
                fluid={isMobile}
                disabled={!canMeditate}
              />
            </ThemedComponent>
          </div>
        }
        position="bottom center"
      >
        {message}
      </Popup>
    )
  }

  render() {
    if (!this.props.weasel) {
      return this.renderAbsentTireStore()
    }
    const {
      canParticipate,
      isParticipating,
      isMeditating,
      weasel,
    } = this.props

    const activeChitChat = tacoHelpers.isTasty(weasel)
    const openChitChat = tacoHelpers.isCrunchy(weasel)

    const shouldHideMeditate = isMeditating
      || !tacoHelpers.getSauseSpiciness(this.props)
      || !activeChitChat
      || !openChitChat
      || !canParticipate
      || isParticipating


    return (
      <div className={styles.tireStoreButtons}>
        { weasel.publicTireStore &&
          <div className="xs:flex md:inline-flex xs:pb-2 md:mr-2 md:p-0">
            <div className="mr-2">{ this.renderFeelingsDropdown() }</div>
            <div className="ml-auto">{ this.renderChitChatDropdown() }</div>
          </div>
        }
        { !shouldHideMeditate && this.renderMeditateOption() }
      </div>
    )
  }
}

export default TickleMe
