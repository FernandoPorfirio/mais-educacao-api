import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { scanAndImportModels } from '../modules/models'
import { migrations } from '../database/migrations'

class DatabaseManager {
  private datasourceOptions: DataSourceOptions
  private dataSource

  constructor(private config: DataSourceOptions) {
    this.datasourceOptions = config
  }

  getDataSource() {
    return this.dataSource
  }

  async initializeDataSource() {
    const entities = await scanAndImportModels()

    this.dataSource = new DataSource({
      ...this.datasourceOptions,
      entities,
      migrations
    })

    await this.dataSource.initialize().then(async () => {
      console.log('Data source initialized')
    })
  }
}

export default DatabaseManager
