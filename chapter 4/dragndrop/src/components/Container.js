import React, { Component } from 'react';
import CharacterCart from './CharacterCart';
import Character from './Character';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// 모든 드래그 앤 드롭 상호작용이 수행되는 컴포넌트
// 각기 다른 name 속성을 포함하는 Character 컴포넌트 여러 개 렌더링
// 그 아래에 CharacterCart 컴포넌트 렌더링
class Container extends Component {
  render() {
    return (
      <div>
        <Character name='배 좌수'/>
        <Character name='허씨 부인'/>
        <Character name='장화'/>
        <Character name='홍련'/>
        <Character name='장쇠'/>
        <CharacterCart/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
