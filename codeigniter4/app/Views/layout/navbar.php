<nav id="navbar" class="bg-white m-2 rounded-lg shadow-sm fixed top-0 right-0 left-0 z-10"
  style="margin-left: 5rem; transition: margin-left 0.3s ease;">
  <div class="max-w-full mx-auto px-4">
    <div class="flex justify-end h-16">
      <div class="ml-3 mr-5 flex items-center">
        <button id="userMenuButton" class="flex items-center gap-3 bg-white rounded-lg p-2 hover:bg-gray-50">
          <span id="hide" class="text-sm text-nav text-gray-700">John Doe</span>
          <i class="fa-regular fa-circle-user fa-2x"></i>
        </button>
        <!-- Dropdown Menu -->
        <div id="userDropdown" class="dropdown-menu">
          <a href="#" class="dropdown-item">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
