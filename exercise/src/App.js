import { Component } from 'react';
import ReadContent from './components/ReadContent';
import CreateComponent from './components/CreateComponent';
import Control from './components/Control';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 2;
    this.state = {
      mode: 'welcome',
      selected_id: 0,
      contents: [
        { id: 0, title:"영웅", review:"뮤지컬영화" },
        { id: 1, title:"아바타", review:"쓰리디 최고" },
        { id: 2, title:"유령", review:"너무 재밌다!!" }
      ]
    }
  }

  getReadContent(){
    for (let content of this.state.contents) {
      if (content.id === this.state.selected_id) {
        return content;
      }
    }
  }

  printContent() {
    let _title, _review, _article = null;
    if (this.state.mode === 'welcome') {
      // welcome 일 때 동작 수행하게
      _title = this.state.welcome.title;
      _review = this.state.welcome.review;
      _article = <ReadContent title={_title} review={_review}></ReadContent>;
    }
    else if (this.state.mode === 'read') {
      let _content = this.getReadContent();
      _title = this.state.welcome.title;
      _review = this.state.welcome.review;
      _article = <ReadContent title={_title} review={_review}></ReadContent>;
      
    }
    else if (this.state.mode === 'create') {
      // create 동작일 때 최대 id 값을 올려주고 _article은 createContent의 결과여야 
      // 그리고 mode와 content, selected_id를 업그레이드 해줘야
      this.max_content_id++;
      _article = <CreateComponent
        onSubmit={function (_title, _review) {
          const newContent = this.state.contents.concat({ id: this.max_content_id, title: _title, review: _review});
          this.setState({
            mode: 'read',
            contents: newContent,
            selected_id: this.max_content_id
          });
        }.bind(this)}
      ></CreateComponent>
    }
  return _article;
}
  
  render() {
    return (
      <div className="App">
        <>
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        </>

        <>
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              selected_id: Number(id),
              mode: 'read'
            });
          }.bind(this)}
      </>

          <Control onChangeMode={function (_mode) {
        this.setState({
          mode: _mode
        });
      }.bind(this)}></Control>
      
        {this.printContent()}
      </div>
    );
  }
}

export default App;

  