import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const pass = control.get('password');
  const confirm = control.get('repeat');
  if (pass.pristine || confirm.pristine) {
    return null;
  }
  return pass && confirm && pass.value !== confirm.value ? { 'misMatch': true } : null;
}
