#!/bin/bash
docker-compose stop
docker system prune --force;
docker system prune --volumes --force;
