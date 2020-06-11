# 🧬 Api COVID 🧪

Se trata de una api de graphQL que te ayudara a tener información sobre las camas disponibles por cada pais para atender la emergencia sanitaria del 2020, adicional cuenta con la posibilidad de consultar las restricciones que han implementado cada pais para controlar la pandemia junto con los detalles de las misma. 

Para usar la Api por favor usar: https://app-backend-graphql.herokuapp.com/

## Instalación 🐱‍🏍
Se requiere [Node.js](https://nodejs.org/) v12+ para ejecutarse.
1. Clona el proyecto con el comando:
    ```sh
     $ git clone https://github.com/JonasTronco/apiCovidGraphql.git
    ```
2. Verifica que tienes la ultima versión de Node.js y en el directorio ejecuta:
    ```sh
     $ npm install
    ```
### Ambientes de Desarrollo
Ejecuta el modulo con nodemon

```sh
$ npm run dev
```
### Ambientes de Producción
Ejecuta el modulo con las variables de entorno de acuerdo al archivo
```sh
$ npm run start
```
---
## Api Documentación
La API cuenta con la posibilidad de realizar consultas a dos diferentes dataset de información
* Consultas Dataset de Camas disponibles para atender la emergencia
* Consulta Dataset 2 con las restricciones impuestas

### Consultas dataset 1 ***Camas disponibles***

Si deseamos realizar una consulta generica para todos los paises podemos usar la siguiente estructura que contiene todos los atributos disponible para consultar pero no es necesario pedirlos todos.

```graphql
    {
          getCountrys(){
                code
                lat
                lng
                bedsTotal
                bedsAverage
                populationAverage
                estimatedBedsTotal
                estimatedBedsAverage
                typebed{
                     type
                     total
                     percentage
                     population
                     estimatedForPopulation
                     source
                     sourceUrl
                     year
                }
                restrictions{
                     dateStart
                     dateEnd
                     description
                     keywords
                     exceptions
                     quantity
                      implementingCities
                      targetCountries
                      targetRegions
                      implementingStates
              }
         }
    }
```
---
#### Estructura de la respuesta
Cada una de las peticiones tendran como respuesta un JSON con las siguiente estructura.

```JSON
   {
      "data": {
        "getCountrys": [
          {
            "code": "ad",
            "lat": 42.5,
            "lng": 1.5,
            "bedsTotal": 2.571,
            "bedsAverage": 1.2855,
            "populationAverage": 84105,
            "estimatedBedsTotal": 21710.3537,
            "estimatedBedsAverage": 10855.17685,
            "typebed": [
              {
                "type": "total",
                "total": 2.5,
                "percentage": 97.23842862699338,
                "population": 84463,
                "estimatedForPopulation": 21115.75,
                "source": "wdi",
                "sourceUrl": "https://data.worldbank.org/indicator/SH.MED.BEDS.ZS",
                "year": 2009
              },
              {
                "type": "icu",
                "total": 0.071,
                "percentage": 2.761571373006612,
                "population": 83747,
                "estimatedForPopulation": 594.6036999999999,
                "source": "icm-journal",
                "sourceUrl": "https://link.springer.com/article/10.1007/s00134-012-2627-8",
                "year": 2011
              }
            ],
            "restrictions": [
              {
                "dateStart": "2020-03-15",
                "dateEnd": "",
                "description": "On 15 March, it was announced that there were four new active cases in Andorra, making a total of 6 cases (5 of them being active at the time). All four people that contracted the virus had been in contact with the 87-year-old woman.",
                "keywords": [
                  "case reporting"
                ],
                "exceptions": [
                  ""
                ],
                "quantity": "",
                "implementingCities": [
                  ""
                ],
                "targetCountries": [
                  ""
                ],
                "targetRegions": [
                  ""
                ],
                "implementingStates": [
                  ""
                ]
              }
    				]
    		}
    ]
}
```
### Otros Queries derivados de la estructura principal
- **getCountry(code: String!): Country** 
Retorna una pais en particular con los datos de la estructura principal 
- **getTopScaleCountrys: [Country]** 
Retorna un Array con los 10 principales países con mayor capacidad de camas (escala)
- **getTopScaleCountry(code:String!):Country** 
Retorna un pais de los 10 principales países con mayor capacidad de camas (escala)
- **getBottomScaleCountrys: [Country]** 
Retorna un Array con los 10 principales países con menor capacidad de camas (escala)
- **getBottomScaleCountry(code:String!):Country** 
Retorna un pais de 10 principales países con menor capacidad de camas (escala)
- **getTopEstimateCountrys: [Country]**
Retorna un Array con los  10 países con mayor capacidad de camas (estimado)
- **getTopEstimateCountry(code:String!):Country** 
Retorna un pais de los  10 países con mayor capacidad de camas (estimado)
- **getBottomEstimateCountrys: [Country]** 
Retorna un Array con los 10 principales países con menor capacidad de camas (estimado)
- **getBottomEstimateCountry(code:String!):Country** 
Retorna un pais  los 10 principales países con menor capacidad de camas (estimado)
- **getTopAvgScaleCountrys: [Country]** 
Retorna un Array con los 10 países con mayor capacidad promedio de camas (escala)
- **getTopAvgScaleCountry(code:String!):Country** 
Retorna un pais los 10 países con mayor capacidad promedio de camas (escala)
- **getBottomAvgScaleCountrys: [Country]**
Retorna un Array con los 10 principales países con menor capacidad promedio de camas (escala)
- **getBottomAvgScaleCountry(code: String!): Country** 
Retorna un pais  los 10 principales países con menor capacidad promedio de camas (escala)
- **getTopAvgEstimateCountrys:[Country]** 
- Devuelve todos Paises Top Average bed Capacity - Estimate
- **getTopAvgEstimateCountry(code:String!):Country** 
- Devuelve solo un pais Top Average bed Capacity - Estimete
- **getBottomAvgEstimateCountrys:[Country]** 
- Devuelve todos Paises Bottom Average bed Capacity - Estimete
- **getBottomAvgEstimateCountry(code:String!):Country** 
- Devuelve solo un pais Bottom Average bed Capacity - Estimete

License
----

MIT
