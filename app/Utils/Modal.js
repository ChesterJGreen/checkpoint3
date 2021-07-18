
export const modal = function () {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your item has been deleted.',
        'success',
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id),
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
      )
    }
  })
}
