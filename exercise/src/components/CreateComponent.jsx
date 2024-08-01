import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h1>컨텐츠 생성하기</h1>
        <form action={"create_process"} onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.review.value
          )
        }.bind(this)}>
          <p><input type="text" name="title" placeholder="제목을 입력하세요"></input></p>
          <p><textarea name="review" placeholder="내용을 입력하세요"></textarea></p>
          <p><input type="submit" value="등록하기"></input></p>
        </form>
      </article>
    );
  }
}

export default CreateContent;