import React, { Component } from 'react'

class Button extends Component {
    shouldComponentUpdate(nextProps){
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange,  locale: nextLocale} = nextProps;

        if(currentChange === nextChange && currentLocale === nextLocale){
            return false;
        }else{
            return true;
        }
    }

  render() {
    const {change, locale, show} = this.props;
    return (
      <>
        <button type='button' onClick={() => change(locale)}>
            {locale === 'bn-BD' ? 'Change': 'পরিবর্তন করুন'}
        </button>
        {show && <p>Hello!!</p>}
      </>
    )
  }
}

export default  Button;
