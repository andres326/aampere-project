import { createApp } from './app.js'

import { VehicleModel } from './models/postgres/vehicle.js'

createApp({ vehicleModel: VehicleModel })
