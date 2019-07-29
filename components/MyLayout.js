import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

// const Layout = props => (
//     <div style={layoutStyle}>
//         <Header />
//         {props.children}
//     </div>
// );

// export default Layout;

// Mehtod 1
/* const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default withLayout; */

// Mehtod 2

const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {props.content}
    </div>
  );
  
  export default Layout;