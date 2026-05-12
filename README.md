# XSS Detector
A small ML model trained on a custom dataset.


## Reproduction

Requirements: Python 3.12.10, scikit-learn 1.8.0, pandas 3.0.2, 
numpy 2.4.4, matplotlib 3.10.9, Semgrep 1.162.0.

1. `pip i -r requirements.txt`
2. `pip i semgrep`
3. `semgrep --config xss.yml data/test_snippets/ --json --quiet > data/semgrep_output.json`
4. Open `pipeline.ipynb` and run all cells.