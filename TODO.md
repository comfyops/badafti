- badafti init
  - env allow list
  - varaiable to ask for tf
  - buildspec...
    - require (aws)
    - timeout
- badafti export modules
  - What modules need accepting
- badafti validate (json/yaml scheme)
- badafti build all|step|--var x=1
  - .badatfti.env
- Added modules by devops above (like ecr repo)
  - required modules (like backup)? ... or do we do it in the component thing? (like allow only private_vm instead of vm+private_subnet)

- modules by env (vercel, aws, local etc)

- close loop with get logs, metrics, alerts, debug session and debug networking

- git clone

commands:
validate + --watch
gen-schema

// also from https://dev.azure.com/yonixw/_git/DevopsHeavenBaseIAC?path=/TODO_README:
allow 2 steps terraform (ecr before ecs )
allow build and terraform steps to be in same lit (ecr, ecs)
Security maybe only:
    no docker in docker
      also no root..
    no run script (access to env)
    no IAM env access so
        "build_docker" - build image
        "run_docker" run in image with approved_env

        "push_ecr"
        "push_docker_io"

        "run_terraform"
                local folder that does it locally?
            module,
            target,
            env,
        "terraform_plan"
            run plan 
            save image, json, html etc.
                https://hieven.github.io/examples/aws-s3
        "terraform_output"
            to use ecr with docker push...

        docker_image_tag = use_pipeline || custom + template:""

        "push_artifact"
        "get_artifact"

        "load_env" - from file
        "env" - map

middle pipeline after push
    step: manual or timewait
        to "update" the real pipeline yam in git 
        and to update terraform files (commit is terraform artifact)
        and to run pipeline on them


