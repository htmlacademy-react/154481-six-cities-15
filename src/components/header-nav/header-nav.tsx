function HeaderNav(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>

  //   <nav class="header__nav">
  //   <ul class="header__nav-list">
  //     <li class="header__nav-item user">
  //       <a class="header__nav-link header__nav-link--profile" href="#">
  //         <div class="header__avatar-wrapper user__avatar-wrapper">
  //         </div>
  //         <span class="header__login">Sign in</span>
  //       </a>
  //     </li>
  //   </ul>
  // </nav>
  );
}

export default HeaderNav;
