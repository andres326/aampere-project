import { errors } from '../utils/constants.js'

export const errorHandler = (error, request, response, next) => {
  console.log(JSON.stringify(error))
  if (error.name === errors.DB_ERROR) {
    return response.status(500).json({
      error: true,
      message: 'Internal server error',
    })
  }
  if (error.name === errors.VALIDATION_ERROR) {
    return response.status(400).json({
      error: true,
      message: 'Validation error',
      errors: error.errors,
    })
  }

  next(error)
}
