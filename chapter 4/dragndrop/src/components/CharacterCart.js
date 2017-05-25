import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import constants from './constants';

// ShoppingCart DND 사양
//    "드롭 대상 사양을 구현하는 일반 객체"
//
//  - DropTarget 메서드 (모두 선택적)
//    - drop: 호환되는 항목이 드롭되면 호출된다.
//    - hover: 항목으로 컴포넌트를 가리키면 호출된다.
//    - canDrop: 드롭 대상이 항목을 수락할 수 있는지 여부를
//               지정하는 데 이용된다.
const CharacterCartSpec = {
  drop() {
    return { name: 'CharacterCart' };
  }
};

// ShoppingCart DropTarget - collect
//  "The collecting function.
//
//  - connect: DropTargetConnector의 인스턴스
//             드롭 대상 역할을 DOM 노드에 할당하는 데 이용한다.
//
//  - monitor: DropTargetMonitor의 인스턴스
//    리액트 DnD에서 속성으로 상태를 연결하는 데 이용한다.
//    상태를 얻는 데 이용할 수 있는 함수 canDrop(), isOver(), didDrop()
let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class CharacterCart extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#FFFFFF';
    if (isActive) {
      backgroundColor = '#F7F7BD';
    } else if (canDrop) {
      backgroundColor = '#F7F7F7';
    }

    const style = {
      backgroundColor: backgroundColor
    };

    return connectDropTarget(
      <div className='character-cart' style={style}>
        {isActive ?
          'Hummmm, Character!' :
          'Drag here to write!'
        }
      </div>
    );
  }
}

CharacterCart.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
}

export default DropTarget(constants.CHARACTER, CharacterCartSpec, collect)(CharacterCart);
