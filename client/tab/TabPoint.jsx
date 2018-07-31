import React from 'react'
import { Tab } from 'semantic-ui-react'
import TableComponent from '../tableComponent/TableComponent.jsx';
import MouComponent from '../mou/MouComponent.jsx';

const panes = [
  {
    menuItem: 'Projects/Taskorders', render: (props) =>
      <Tab.Pane attached={false}><TableComponent
        projects={props.projects}
        handleSort={props.handleSort}
        column={props.column}
        direction={props.direction}
      /></Tab.Pane>
  },
  {
    menuItem: 'Mou', render: () =>
      <Tab.Pane attached={false}>
        <MouComponent /></Tab.Pane>
  },
]

const TabPoint = (props) => <Tab menu={{ pointing: true }} panes={panes} {...props} />

export default TabPoint;
