# FMIS - Facilities Management Information System (demo UI)

Static multi-page website built for the **CSI1241 Systems Analysis** group assignment
(Facilities Management Information System case study, Edith Cowan University).

This is a **navigation map / UI design exercise only**. There is no backend, no data is
stored, and buttons that would change data are placeholders.

## Pages

| File | Screen | Group member | Actor |
|------|--------|--------------|-------|
| `index.html` | Homepage / landing | shared | - |
| `login.html` | Log in | Gaith Sanudaya Giragama (74006901) | Staff Member |
| `dashboard.html` | Staff dashboard / navigation | shared | - |
| `report.html` | Generate FMO Asset Report | Desandu Hettiarachchi (74007597) | FMO Staff Member |
| `enter-asset.html` | Enter Furniture Asset | Thisum Thewmika L.A.D (74005695) | FMO Staff Member |
| `schedule-move.html` | Schedule Move | Praveen (74006939) | FMO Staff Member |
| `cancel-move.html` | Cancel Move Request | Sehandu (74003639) | Staff Member |

## Running

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

## Notes

- Sample data (names, room IDs, dates, barcodes) is made up but follows the formats in
  the case study (four-character room IDs, two-digit building IDs, EAN-13 barcodes,
  TEFMA space types, AutoCAD `.dwg` drawing names).
- The FMO Asset Report layout follows the sample report in the case study
  (`FMIS_case_study_262v1.4.pdf`).
- The navigation map is not a page of the site. Its diagram source and PNG export
  are kept under `docs/` for use in the report.

## License

All rights reserved. This is a CSI1241 Group A assignment submission, public for
viewing only. See [LICENSE](LICENSE).
