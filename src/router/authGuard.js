import { onAuthStateChanged } from 'firebase/auth'
import { $auth } from '@/firebaseApp'

export function authGuard(to, from, next) {
  //$es el identificador antes de la autenticación
  onAuthStateChanged($auth, (user) => {
    //si no hay un usuario
    if (!user) {
      //entonces redirigir
      next({ name: 'signup' })
      //en otro caso continue a la ruta planificada
    } else {
      next()
    }
  })
}
