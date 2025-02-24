<?= $this->extend('/layout/page_layout') ?>

<?= $this->section('content') ?>

<!-- <div class="col-span-1 space-y-4 mt-8"> -->
<div class="bg-white p-4 rounded-xl shadow-lg h-64 overflow-auto">
  <table class="w-full text-sm text-left text-gray-800 border-separate border-spacing-0 mt-10">
    <thead class="text-xs text-white uppercase bg-gradient-to-r from-indigo-600 to-blue-500 sticky top-0 z-10">
      <tr>
        <th scope="col" class="px-4 py-3 rounded-tl-lg cursor-pointer group" data-sort="id">
          <div class="flex items-center">
            ID
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </th>
        <th scope="col" class="px-4 py-3 cursor-pointer group" data-sort="name">
          <div class="flex items-center">
            Name
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </th>
        <th scope="col" class="px-4 py-3 hidden sm:table-cell cursor-pointer group" data-sort="email">
          <div class="flex items-center">
            Email
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </th>
        <th scope="col" class="px-4 py-3 hidden md:table-cell cursor-pointer group" data-sort="role">
          <div class="flex items-center">
            Role
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </th>
        <th scope="col" class="px-4 py-3 rounded-tr-lg cursor-pointer group" data-sort="status">
          <div class="flex items-center">
            Status
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="bg-gray-50" id="tableBody">
      <tr class="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
        <td class="px-4 py-3 font-medium">1</td>
        <td class="px-4 py-3">John Doe</td>
        <td class="px-4 py-3 hidden sm:table-cell text-gray-600">john.doe@example.com</td>
        <td class="px-4 py-3 hidden md:table-cell">Admin</td>
        <td class="px-4 py-3">
          <span class="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
            Active
          </span>
        </td>
      </tr>
      <tr class="border-b border-gray-200 hover:bg-indigo-50 transition-colors duration-200">
        <td class="px-4 py-3 font-medium">2</td>
        <td class="px-4 py-3">Jane Smith</td>
        <td class="px-4 py-3 hidden sm:table-cell text-gray-600">jane.smith@example.com</td>
        <td class="px-4 py-3 hidden md:table-cell">User</td>
        <td class="px-4 py-3">
          <span class="inline-block px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
            Inactive
          </span>
        </td>
      </tr>
      <tr class="hover:bg-indigo-50 transition-colors duration-200">
        <td class="px-4 py-3 font-medium rounded-bl-lg">3</td>
        <td class="px-4 py-3">Bob Johnson</td>
        <td class="px-4 py-3 hidden sm:table-cell text-gray-600">bob.johnson@example.com</td>
        <td class="px-4 py-3 hidden md:table-cell">Editor</td>
        <td class="px-4 py-3 rounded-br-lg">
          <span class="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
            Active
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- </div> -->
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Sorting functionality
  const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
  )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

  document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
      .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
      .forEach(tr => tbody.appendChild(tr));

    // Toggle sort icon rotation
    const icon = th.querySelector('svg');
    if (this.asc) {
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.style.transform = 'rotate(0deg)';
    }
  })));

  // Add hover effect to show sort icons
  document.querySelectorAll('th').forEach(th => {
    th.addEventListener('mouseenter', () => {
      const icon = th.querySelector('svg');
      icon.classList.remove('opacity-0');
      icon.classList.add('opacity-100');
    });

    th.addEventListener('mouseleave', () => {
      const icon = th.querySelector('svg');
      if (!th.classList.contains('active-sort')) {
        icon.classList.add('opacity-0');
        icon.classList.remove('opacity-100');
      }
    });
  });
});
</script>



<?= $this->endSection() ?>
