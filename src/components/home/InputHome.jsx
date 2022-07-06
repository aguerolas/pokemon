import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const InputHome = ({setLogged}) => {

  const {handleSubmit, reset, register} = useForm()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const ClickLoad = () => {
  setLogged(true)
  navigate('/pokedex')


  }
  const submit = data => {
    dispatch(setNameGlobal(data.nameUser))
    reset({
      nameUser: ''
    })
    navigate('/pokedex')
  }

  return (
    <form className='homeMargin' onSubmit={handleSubmit(submit)}>
      <input className='input-home' placeholder='            Singup your nickname ' type="text" {...register('nameUser')} />
      <button className='btn-home' onClick={ClickLoad} >Go!</button>
    </form>
  )
}

export default InputHome