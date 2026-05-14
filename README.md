# XSS Detector

A logistic regression classifier that flags XSS-prone patterns in AI-generated JavaScript snippets.
Compared against a custom Semgrep configuration on a 250-snippet labelled dataset.

## Contents

```
.
├── xss_detector.ipynb       full pipeline notebook (Cells 1-18)
├── xss.yml                  Semgrep rules (9 hand-written DOM XSS sinks)
├── requirements.txt         pinned Python dependencies
├── data/
│   ├── snippets.csv         250 labelled snippets, one per row
│   ├── test_snippets/       .js files used for the 20% test split
│   └── semgrep_output.json  generated in step 2 below
└── README.md
```

## Reproduction

Python 3.12 on macOS/Linux/WSL. Exact versions are pinned in `requirements.txt`.

```bash
python -m venv .venv
source .venv/bin/activate         # Windows: .venv\Scripts\activate
pip install -r requirements.txt
pip install semgrep
```

Run Semgrep against the test set:

```bash
semgrep --config xss.yml data/test_snippets/ --json --quiet > data/semgrep_output.json 
# config is written into the data folder
```

Open the notebook and run cells in order



The notebook prints the confusion matrices, F1 scores, and figures reported in Chapter 5. Total
runtime is under two minutes on a laptop.

## Notes

- Cells 1-9 can be re-run in any order once Cell 4 has produced the train/test split.
- Cells 10-18 must run in sequence. Cell 11 reads `data/semgrep_output.json` produced above.
- All randomised operations use `random_state=42`.
