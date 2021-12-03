cube(`MeasurementsDataCrate`, {
  sql: `SELECT * FROM doc.measurements_data_crate`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      measures: [MeasurementsDataCrate.count, MeasurementsDataCrate.total],
      dimensions: [MeasurementsCrate.deviceId, MeasurementsDataCrate.type],
      refreshKey: {
        every: `1 hour`
      }
    }
  },
  joins: {
    MeasurementsCrate: {
      relationship: `hasOne`,
      sql: `${CUBE}.measurement_id = ${MeasurementsCrate}.id`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, measurementId]
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
    measurementId: {
      sql: `measurement_id`,
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