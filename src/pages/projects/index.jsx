import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, Table, Tooltip } from 'antd'
import { projectAPI } from 'APIS'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES_NAME } from 'Routes/constans'
import { SearchHeader, TableWrapper } from './styled'

const ProjectsScreen = () =>
{
  const navigate = useNavigate()

  const [dataSource, setDataSource] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>
  {
    setIsLoading(true)
    projectAPI.getProjects().then((res) =>
    {
      setDataSource(res.content)
      setIsLoading(false)
    })
  }, [])

  const onSearch = (values) =>
  {
    setIsLoading(true)
    projectAPI.getProjects({ keyword: values }).then((res) =>
    {
      setDataSource(res.content)
      setIsLoading(false)
    })
  }

  const columns = [
    {
      title: 'No .',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
      render: (creator) => creator.name
    },
    {
      title: 'Category name',
      dataIndex: 'categoryName',
      key: 'categoryName'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (description) => description.replace(/(<([^>]+)>)/gi, "")
    },
    {
      title: 'Category name',
      dataIndex: 'categoryName',
      key: 'categoryName'
    },
    {
      title: 'Members',
      dataIndex: 'members',
      key: 'members',
      render: (members) => members.length
        ? <Avatar.Group>
          {members.map((item, index) => (
            <Tooltip title={item.name} key={index}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>))}
        </Avatar.Group>
        : 'Empty'
    }
  ]

  return (
    <TableWrapper>
      <SearchHeader>
        <Input.Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <Button onClick={() => navigate(ROUTES_NAME.CREATE_PROJECT)}>
          Create project
        </Button>
      </SearchHeader>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={({ id }) => id}
        loading={isLoading}
      />
    </TableWrapper>
  )
}

export default ProjectsScreen