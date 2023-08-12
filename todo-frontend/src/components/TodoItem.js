import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { delete_action, updateState_action } from "../actions";

const ItemWrapper = styled.div`
  width: 80%;
  background-color: #3d6fe9;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const StyledCheckbox = styled.input`
  margin: 10px;
`;

const StyledText = styled.p`
  margin: 8px;
  color: #fff;
  width: 90%;
`;

const StyledButton = styled.button`
  width: 10%;
  color: white;
  background-color: #5b73a7;
  border: 1px solid white;
  border-radius: 10px;
  margin-left: 10px;
`;

class TodoItem extends Component {
  render() {
    let { text, id, state } = this.props;
    return (
      <ItemWrapper>
        <StyledCheckbox
          type="checkbox"
          onClick={(e) => this.props.updateState_action(id, e.target.checked)}
          checked={state}
        />
        <StyledText>{text}</StyledText>
        <StyledButton onClick={() => this.props.delete_action(id)}>
          Delete
        </StyledButton>
      </ItemWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  delete_action: (id) => dispatch(delete_action(id)),
  updateState_action: (id, state) => dispatch(updateState_action(id, state)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
