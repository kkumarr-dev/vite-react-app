import { CSSProperties } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export const AppSpinner = () => {
  return (
    <div style={styles.backdrop as CSSProperties}>
      <div style={styles.textCenter as CSSProperties}>
        <Spinner style={styles.spinnerBorder as CSSProperties} animation='border' />
      </div>
    </div>
  )
}

const styles = {
  textCenter: {
    width: "100%",
    position: "relative",
    height: "100%"
  },
  spinnerBorder: {
    display: "block",
    position: "fixed",
    top: "calc(50% - (58px / 2))",
    right: "calc(50% - (58px / 2))"
  },
  backdrop: {
    position: "absolute",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: 999,
    backgroundColor: "rgb(0,0,0,0.2)"
  }
}

