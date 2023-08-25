import {Outlet} from "react-router-dom";

const TestLayout = () => {
  return (
    <>
        <p>헤더</p>
        <Outlet />
        <p>푸터</p>
    </>
  )
}

export default TestLayout
