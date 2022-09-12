OUTDIR = lib/openapi

.PHONY: gen
gen:
	generator/generate.sh ${OUTDIR}
	cd lib && npm i
	cd lib && npm run build
