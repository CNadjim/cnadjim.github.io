import React from "react";
import './dev-font-card.scss';
import {Zoom} from "react-awesome-reveal";
import {getFileName, getIconByName} from "../../utils/devicon";

export const techno = [
    "devicon-spring-plain-wordmark",
    "devicon-angularjs-plain",
    "devicon-react-original",
    "devicon-javascript-plain",
    "devicon-java-plain",
    "devicon-typescript-plain",
    "devicon-flutter-plain",
    "devicon-apachekafka-original-wordmark",
    "devicon-bootstrap-plain",
    "devicon-docker-plain-wordmark",
    "devicon-github-original-wordmark",
    "devicon-tomcat-line-wordmark",
    "devicon-nodejs-plain-wordmark",
    "devicon-html5-plain-wordmark",
    "devicon-kubernetes-plain-wordmark",
    "devicon-heroku-original-wordmark",
    "devicon-android-plain-wordmark",
    "devicon-tailwindcss-original-wordmark",
    "devicon-cucumber-plain-wordmark",
    "devicon-express-original-wordmark",
    "devicon-firebase-plain-wordmark",
    "devicon-git-plain-wordmark",
    "devicon-gitlab-plain-wordmark",
    "devicon-ionic-original-wordmark",
    "devicon-jasmine-plain",
    "devicon-jira-plain-wordmark",
    "devicon-magento-original-wordmark",
    "devicon-linux-plain",
    "devicon-materialui-plain",
    "devicon-markdown-original",
    "devicon-mysql-plain-wordmark",
    "devicon-nginx-original-wordmark",
    "devicon-npm-original-wordmark",
    "devicon-ocaml-plain-wordmark",
    "devicon-php-plain",
    "devicon-photoshop-line",
    "devicon-postgresql-plain-wordmark",
    "devicon-putty-plain",
    "devicon-raspberrypi-line-wordmark",
    "devicon-redux-original",
    "devicon-trello-plain-wordmark",
    "devicon-travis-plain-wordmark",
    "devicon-ubuntu-plain-wordmark",
    "devicon-c-line-wordmark",
    "devicon-composer-line-wordmark",
    "devicon-dart-plain-wordmark",
    "devicon-drupal-plain-wordmark",
    "devicon-electron-original",
    "devicon-eslint-original-wordmark",
    "devicon-grafana-original-wordmark",
    "devicon-graphql-plain-wordmark",
    "devicon-intellij-plain-wordmark",
    "devicon-mongodb-plain-wordmark",
    "devicon-sass-original",
    "devicon-selenium-original",
    "devicon-slack-plain-wordmark",
    "devicon-sqlite-plain-wordmark",
    "devicon-ssh-original-wordmark",
    "devicon-xcode-plain"
]
export default function DevFontCard({name}) {
    let icon = getIconByName(name);
    let fileName = getFileName(icon, "font");
    return (
        <>
            <div className="flex justify-center items-center h-full w-full dev-card">
                <Zoom>
                    <i className={`${fileName} text-text-color opacity-30`}></i>
                </Zoom>
            </div>
        </>
    )
}
