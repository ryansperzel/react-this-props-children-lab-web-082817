// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecoration extends React.Component {
  render() {
    const divsWithTheme = React.Children.map(this.props.children, child => (
      <div className={this.props.theme}>{child}</div>
    )
  )
    return(
      <div>
        {divsWithTheme}
      </div>
    )
  }
}


// {
//   return React.cloneElement(child, {
//     className: this.props.theme
//   })
// }
