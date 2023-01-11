import React, { Component } from 'react'

export default class PropsEx2 extends Component {
    // PropsEx2.defaultProps = {
    //     text: '이건 기본 text props입니다.'
    //   };
    //   PropsEx2.propTypes = {
    //     text: PropTypes.string};
    render(){
        const { text, valid } = this.props;
        
        return(
            <div>
                {text}
                <button onClick={valid}>버튼</button>
            </div>
            
  )
}
}
