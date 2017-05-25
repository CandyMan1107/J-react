import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedCharacterList extends Component {
  constructor(){
    super(...arguments);
    // 몇 가지 캐릭터 항목을 미리 설정한 items 상태를 만든다.
    this.state={
      items: [
        {id:1, name: '배 좌수'},
        {id:2, name: '장화'},
        {id:3, name: '홍련'},
      ]
    }
  }

  // 사용자가 입력 필드를 변경할 때 호출된다.
  handleChange(evt) {
    if(evt.key === 'Enter'){
      // 새로운 항목을 생성하고 id를 현재 시간으로 설정한다.
      let newItem = {id:Date.now(), name:evt.target.value}
      // 이전 items에 사용자가 입력한 값을 추가해 새로운 배열을 만든다.
      let newItems = this.state.items.concat(newItem);
      // 텍스트 필드를 지운다.
      evt.target.value='';
      // 새로운 상태를 설정한다.
      this.setState({items: newItems});
    }

  }

  // 사용자가 클릭하면 호출된다.
  handleRemove(i) {
    // 클릭한 항목을 제외하고 새로운 배열을 생성한다.
    var newItems = this.state.items;
    newItems.splice(i, 1);
    // 새로운 상태를 설정한다.
    this.setState({items: newItems});
  }

  render(){
    let characterItems = this.state.items.map((item, i) => (
      <div key={item.id} className="item" onClick={this.handleRemove.bind(this, i)}>{item.name}</div>
    ));

    return( // 컴포넌트가 작동하며 항목을 추가 및 제거
      <div>
        <ReactCSSTransitionGroup transitionName="example" // 실제 애니메이션 정의를 포함하는 CSS 클래스 이름으로 매핑된다.
                                 transitionEnterTimeout={300} // 300ms // 지속 시간
                                 transitionLeaveTimeout={300}
                                 transitionAppear={true}  // 처음 마운팅할 때 적용되는 초기 트랜지션 단계 추가
                                 transitionAppearTimeout={300}>
          {characterItems}
        </ReactCSSTransitionGroup>
        <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
      </div>
    );
  }
};

export default AnimatedCharacterList;