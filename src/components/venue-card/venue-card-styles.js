import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
  min-width: 250px;
  min-height: 100px;
  flex: 1;
  @media (min-width: 500px) {
    min-height: 150px;
  }
`

const Card = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  min-height: 100px;
  padding: 20px;
  background-color: rgba(253, 245, 230, 0.5);
  color: #29BEA5;
  border-radius: 10px;
  position: relative;
  @media (min-width: 500px) {
    min-height: 150px;
  }
  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    background-color: rgba(253, 245, 230, 0.8);
  }
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
  a {
    color: white;
    font-weight: normal;
    display: block;
    background: burlywood;
    text-decoration: none;
    margin: 10px auto 0 auto;
    width: 60px;
    font-size: 14px;
    padding: 5px 0;
    border-radius: 5px;
    &:hover {
      background-color: navajowhite;
    }
  }
`

const List = styled.ul`
  position: relative;
  background-color: rgba(102, 221, 170, 0.8);
  list-style-type: none;
  text-align: left;
  padding: 20px 10px;
  margin: 0;
  height: 100%;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  li {
    color: papayawhip;
    font-size: 11px;
    margin-bottom: 2px;
  }
`
const ListHeading = styled.h1`
  font-size: 20px;
  margin: 0 0 15px 0;
  text-align: center;
  color: rgb(253, 245, 230)
`

const ListItem = styled.li`
  display: flex;
  align-content: flex-start;
`

const DayOfWeek = styled.span`
  width: 35px;
  font-size: 12px;
`

const DayOfMonth = styled.span`
  color: firebrick;
  width: 40px;
  margin-right: 5px;
  font-size: 12px;
`

export {
  Container,
  Card,
  List,
  ListHeading,
  ListItem,
  DayOfWeek,
  DayOfMonth
}
