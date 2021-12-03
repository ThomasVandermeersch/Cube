cube(`SmartmeasurementsDataCrate`, {
  sql: `SELECT * FROM doc.smartmeasurements_data_crate`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      measures: [SmartmeasurementsDataCrate.total],
      dimensions: [AssetstagsCrate.linkedassetId, SmartmeasurementsDataCrate.type],
      refreshKey: {
        every: `12 hour`
      }
    }
  },
  joins: {
    SmartmeasurementsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.smartmeasurement_id = ${SmartmeasurementsCrate}.id`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, smartmeasurementId]
    },
    total: {
      sql: `value`,
      type: `sum`
    }
  },
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    smartmeasurementId: {
      sql: `smartmeasurement_id`,
      type: `string`
    },
    type: {
      sql: `type`,
      type: `string`
    },
    unit: {
      sql: `unit`,
      type: `string`
    },
    value: {
      sql: `value`,
      type: `string`
    }
  },
  dataSource: `default`
});