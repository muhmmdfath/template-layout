<?= $this->extend('/layout/page_layout') ?>

<?= $this->section('content') ?>

<div class="col-span-1 space-y-4 mt-8">
  <!-- Mobile Column Toggle -->
  <div class="block sm:hidden mb-4">
    <select id="columnToggle" class="w-full p-2 border rounded-lg bg-white shadow-sm" multiple>
      <option value="id" selected>ID</option>
      <option value="name" selected>Name</option>
      <option value="email" selected>Email</option>
      <option value="role" selected>Role</option>
      <option value="status" selected>Status</option>
    </select>
  </div>

  <div class="bg-white p-4 rounded-xl shadow-lg h-64 overflow-auto">
    <table class="w-full text-sm text-left text-gray-800 border-separate border-spacing-0">
      <thead class="text-xs text-white uppercase bg-gradient-to-r from-indigo-600 to-blue-500 sticky top-0 z-10">
        <tr>
          <th scope="col" class="px-4 py-3 rounded-tl-lg cursor-pointer" data-sort="id">
            ID
            <span class="sort-icon ml-1">↕</span>
          </th>
          <th scope="col" class="px-4 py-3 cursor-pointer" data-sort="name">
            Name
            <span class="sort-icon ml-1">↕</span>
          </th>
          <th scope="col" class="px-4 py-3 hidden sm:table-cell cursor-pointer" data-sort="email">
            Email
            <span class="sort-icon ml-1">↕</span>
          </th>
          <th scope="col" class="px-4 py-3 hidden md:table-cell cursor-pointer" data-sort="role">
            Role
            <span class="sort-icon ml-1">↕</span>
          </th>
          <th scope="col" class="px-4 py-3 rounded-tr-lg cursor-pointer" data-sort="status">
            Status
            <span class="sort-icon ml-1">↕</span>
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
  </div>
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
  })));

  // Column toggle functionality
  const columnToggle = document.getElementById('columnToggle');
  if (columnToggle) {
    columnToggle.addEventListener('change', function() {
      const selectedColumns = Array.from(this.selectedOptions).map(option => option.value);
      const table = document.querySelector('table');

      // Handle column visibility
      table.querySelectorAll('th, td').forEach(cell => {
        const columnName = cell.getAttribute('data-column');
        if (columnName) {
          cell.style.display = selectedColumns.includes(columnName) ? '' : 'none';
        }
      });
    });
  }
});
</script>

<?= $this->endSection() ?>
