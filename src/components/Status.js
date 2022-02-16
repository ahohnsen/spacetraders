import styled from 'styled-components';

export default function Status({ isGreen }) {
  return (
    <Wrapper>
      Status:
      <StatusCircle isGreen={isGreen} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;
  padding: 10px;
`;

const StatusCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => (props.isGreen ? 'green' : 'red')};
  border-radius: 50%;
`;
