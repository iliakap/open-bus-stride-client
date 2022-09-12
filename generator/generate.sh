readonly OUTDIR=$1
readonly NPM_NAME=open-bus-stride-client
readonly NPM_VERSION=0.0.1

if [[ -z "$OUTDIR" ]]; then
   echo "outdir not provided"
   exit 1
fi

docker run --rm \
  -v ${PWD}/${OUTDIR}:/local \
  openapitools/openapi-generator-cli:latest generate \
  -i https://open-bus-stride-api.hasadna.org.il/openapi.json \
  -g typescript-fetch \
  --git-user-id=iliakap --git-repo-id=open-bus-stride-client \
  --additional-properties=stringEnums=true \
  --remove-operation-id-prefix \
  -o /local/

