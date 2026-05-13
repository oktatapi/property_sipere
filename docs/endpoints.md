# Endpoints

## Properties

| Endpoint | Method | Auth | Description |
| - | - | - | - |
| /properties | GET | no | Get properties |
| /properties | POST | no | New property |
| /properties/:id | PUT | no | Update property |
| /properties/:id | DELETE | no | Delete property |

### New properties

Endpoint:

* /api/properties

Data:

```json
{
    "address": "Szeged, Nyár utca 8.",
    "price": 320000,
    "area_sqm": 200,
    "property_type": "iroda",
    "is_available": true
}
```
