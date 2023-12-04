FROM ubuntu

# CMD ["echo", "Hello World"]

# this will fetch a ubuntu images and will run echo command
# docker build -t demo-cmd .
# docker run demo-cmd
# with CMD, if command line args are passed to docker run 
# command, CMD instructions will be overwritten
# the original CMD instructions, will be ignored completely
# docker run demo-cmd echo "Hello Dev Ops Guys"
# docker run demo-cmd printenv

# uncomment ENTRYPOINT now and comment CMD instruction above

# ENTRYPOINT ["echo", "Hello World"]

# docker build -t demo-entrypoint .
# docker run demo-entrypoint
# docker run demo-entrypoint echo "Hello Dev Ops Guys"
# in this case, it prints Hello World echo Hello Dev Ops Guys
# so the arguments which are passed to command are not executed but
# those are taken as parameter to ENTRYPOINT command
# try  docker run demo-entrypoint printenv and see printenv is printed as is

# to temp override the behaviour use --entrypoint (just for testing)
# docker run --rm --entrypoint sh demo-entrypoint -c 'echo "chandra"'
# docker run --rm --entrypoint printenv  demo-entrypoint

# Using together
# should complement each other
# comment ENTRYPOINT above and UNCOMMENTS below instructions

# ENTRYPOINT ["echo", "Hello"]
# CMD ["Team"]

# docker build -t demo-cmdentry .
# docker run demo-cmdentry
# docker run demo-cmdentry 'Dev Ops Team'