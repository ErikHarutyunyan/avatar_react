import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../app/features/user/userActions'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { SIGNIN_SCHEMA } from '../utils/helper/validation.helper'
import Error from '../components/Error'


const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    // onSubmit
    resolver: yupResolver(SIGNIN_SCHEMA),
  });

  const navigate = useNavigate()
  
  // redirect authenticated user to profile screen
  useEffect(() => {
    
    if (userInfo) {
      navigate('/profile')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    
    dispatch(userLogin(data))
  }

  console.log(errors,"err-to-submit")
  
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error msg={error} />}
      {/* {errors && <Error msg={errors} />} */}
      <div className='form-group'>
        {errors?.username?.message && <Error msg={errors.username.message} />}
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          className='form-input'
          {...register('username')}
          required
        />
      </div>
      <div className='form-group'>
        {errors?.password?.message && <Error msg={errors.password.message} />}
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button' disabled={loading}>
        Login
      </button>
    </form>
  )
}

export default Login
