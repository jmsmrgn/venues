import styled from 'styled-components'

const Container = styled.div`
padding: 5px;
width: 100%;
@media (min-width: 500px) {
  width: 50%;
}
@media (min-width: 767px) {
  width: 33.33%;
}
@media (min-width: 1024px) {
  width: 25%;
}
@media (min-width: 1600px) {
  width: 20%;
}
`

const Button = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 20px;
  background: oldlace;
  color: #29BEA5;
  text-decoration: none;
  :hover {
    cursor: pointer;
    margin-top: -1px;
  }
  a {
    color: white;
    font-weight: normal;
    display: block;
    background: burlywood;
    text-decoration: none;
    margin: 10px auto 0 auto;
    width: 80px;
    &:hover {
      background-color: navajowhite;
    }
  }
`

const List = styled.ul`
  background: mediumaquamarine;
  list-style-type: none;
  text-align: left;
  padding: 5px 10px;
  margin: 0;
  li {
    color: papayawhip;
    font-size: 11px;
    margin-bottom: 2px;
  }
`

const ListItem = styled.li`
  display: flex;
  align-content: flex-start;
`

const DayOfWeek = styled.span`
  width: 65px;
  margin-right: 5px;
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
  Button,
  List,
  ListItem,
  DayOfWeek,
  DayOfMonth
}
