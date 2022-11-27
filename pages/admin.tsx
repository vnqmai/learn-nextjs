import AdminLayout from '../components/layouts/admin'

interface IAdminPageProps {}

function Admin(props: IAdminPageProps) {
  return (
    <div>
      <div>Admin page - no unmount/mount effect</div>
    </div>
  )
}

Admin.Layout = AdminLayout

export default Admin
