export class Pop {

  /**
   * @typedef {{isAxiosError: boolean, message: string, response:{ data: any}}} AxiosError
   */

  /**
    * @param {string} title The title text.
    * @param {string} text The body text.
    * @param {string} confirmButtonText The text of your confirm button.
    * @param {'success' | 'error' | 'info' | 'warning' | 'question'} icon Pop icon
    *
    * {@link https://sweetalert2.github.io/#configuration | Check out Sweet Alerts}
  */
  static async confirm(title = 'Are you sure?', text = "You won't be able to revert this!", confirmButtonText = 'Yes', icon = 'warning') {
    try {
      // @ts-ignore
      const res = await Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: 'var(--bs-primary)',
        cancelButtonColor: 'var(--bs-secondary)',
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
   * @param {string} title The title text
   * @param {'success' | 'error' | 'info' | 'warning' | 'question'} icon
   * @param {'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end'} position
   * @param {number} timer Time in milliseconds.
   * @param {boolean} progressBar Show progress bar or not respectively.
   * -----------------------------------
   * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
   */
  // @ts-ignore
  static toast(title = 'Warning!', icon = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    // @ts-ignore
    Swal.fire({
      title,
      icon,
      position,
      timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false
    })
  }

  /**
   * @param { Error | string | any } error An Error Object.
   */
  static error(error) {
    this.toast(error.message || error, 'error')
  }

  /**
   * @param { string } message The message to display. If not provided, will display a generic message.
   */
  static success(message = 'Success!') {
    this.toast(message, 'success')
  }
}
