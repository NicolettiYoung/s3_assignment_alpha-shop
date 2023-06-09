import { ReactComponent as LOGO } from "../../assests/icons/Logo.svg"
import { ReactComponent as Toggle } from "../../assests/icons/Toggle.svg"
import { ReactComponent as Search } from "../../assests/icons/Icon-search.svg"
import { ReactComponent as Cart } from "../../assests/icons/Icon-cart.svg"
import { ReactComponent as Sun } from "../../assests/icons/Icon-sun.svg"
import { ReactComponent as Moon } from "../../assests/icons/Icon-moon.svg"

export default function Header() {
  return (
    <>
      {/* header */}
      <header className="site-header">
        <div className="header-container mx-auto">
            {/* navbar-toggle */}
            <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
            <label for="navbar-toggle" class="burger-container">
                    <Toggle class="burger-container" />
      </label>

      {/*navbar-menu*/}
      <nav className="navbar-menu">
        <ul className="nav-list site-menu-list mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">男款</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">女款</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">最新消息</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">客製商品</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">聯絡我們</a>
          </li>
        </ul>
       <ul className="nav-list site-action-list">
          {/* search*/}
          <li className="nav-item">
            <Search className="nav-icon cursor-point" />
          </li>
          {/* cart */}
          <li className="nav-item">
            <Cart className="nav-icon cursor-point" />
          </li>
          <li id="theme-toggle" class="nav-item">
            {/* moon */}
            <Moon class="nav-icon cursor-point" />
            {/* sun */}
            <Sun class="nav-icon cursor-point" />
          </li>
        </ul>
      </nav>

      {/* logo */}
      <a className="header-logo-container" href="#">
        <LOGO class="icon-logo cursor-point" />
      </a>
    </div>
   </header>
  </>
  )
}