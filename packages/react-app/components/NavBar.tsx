import React from "react";

const NavBar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<p className="font-bold text-indigo-950 pl-1 text-xl">CeloGiftCard.</p>
			</div>
			<div className="flex-none">

				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-24 mask mask-squircle">
							<img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
						<li><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavBar;