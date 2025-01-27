// app/admin/layout.tsx
export const metadata = {
  title: "Admin Layout",
  description: "Layout for the admin section",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <nav>Admin Navbar</nav>
        <main>{children}</main>
        <footer>Admin Footer</footer>
      </body>
    </html>
  );
};

export default AdminLayout;
