import { useState } from "react";
import { CheckIcon, DocumentTextIcon, LinkIcon, ExternalLinkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import confirmationIcon from '../../images/confirmation.svg';


function Steps1Mobile() {
  const steps = ["notion_integration", "notion_template_duplication", "notion_database", "complete"];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [errorMsg, setErrorMsg] = useState("");

  const getCurrentStepIndex = () => {
    return steps.indexOf(currentStep);
  }

  const previousClickHandler = () => {
    let currentStepIndex = getCurrentStepIndex();
    let newStepIndex = currentStepIndex - 1;

    if(newStepIndex >= 0) {
      setCurrentStep(steps[newStepIndex]);
    }
  }

  const nextClickHandler = () => {
    let currentStepIndex = getCurrentStepIndex();
    let newStepIndex = currentStepIndex + 1;

    if(newStepIndex < steps.length) {
      let nextStep = steps[newStepIndex];
      setCurrentStep(nextStep);
    }
  }

  return (
    <div className="md:hidden w-60 mx-auto mt-4">
      <div className="flex flex-col border border-gray-300 rounded-md shadow-sm divide-x divide-gray-300">
        <div className={"p-4 pl-2 items-center " + (getCurrentStepIndex() == 0 && "bg-gray-100 rounded-l-md h-80") }>
          <div className="flex items-center">
            <div className={"flex place-items-center content-center justify-center w-10 h-10 border-2 border-gray-900 rounded-full text-center " + (getCurrentStepIndex() > 0 ? "bg-gray-900": "bg-white") }>
              <div>
                {
                  getCurrentStepIndex() > 0 ?
                  <CheckIcon className="text-white h-5 w-5" />: 
                  <div className={getCurrentStepIndex() == 0 ? "text-gray-500": "text-gray-500"}>01</div>
                }
              </div>
            </div>
            <div className={"pl-4 " + (getCurrentStepIndex() >= 0 ? "text-gray-900": "text-gray-500")}>Notion Integration</div>
          </div>
          <div className={"ml-2 pt-8 space-y-6 " + (currentStep != "notion_integration" ? 'hidden': '')}>
            <div className="flex items-center">
              <DocumentTextIcon className="h-5 w-5 text-gray-400" />
              <input type="text" 
                className={"ml-2 h-7 font-sans font-light pl-2 pr-2 w-full text-sm border rounded-md border-gray-300"} placeholder="Workspace name"
              ></input>
            </div>
            <div className="flex items-center">
              <LinkIcon className="h-5 w-5 text-gray-400 inline" /> 
              <input type="text" 
                className={"ml-2 h-7 font-sans font-light pl-2 pr-2 w-full text-sm border rounded-md border-gray-300"} placeholder="Integration token"
              ></input>
            </div>
          </div>
        </div>
        
        <div className={"p-4 pl-2 items-center " + (getCurrentStepIndex() == 1 && "bg-gray-200 h-80")}>
          <div className="flex items-center">
            <div className={"flex place-items-center content-center justify-center w-10 h-10 border-2 rounded-full text-center "  + (getCurrentStepIndex() > 1 ? "bg-gray-900": "bg-white") + " " + (getCurrentStepIndex() >= 1 ? "border-gray-900" : "border-gray-400") }>
              {
                getCurrentStepIndex() > 1 ?
                <CheckIcon className="text-white h-5 w-5" />: 
                <div className={getCurrentStepIndex() == 1 ? "text-gray-500": "text-gray-500"}>02</div>
              }
            </div>
            <div className={"pl-4 " + (getCurrentStepIndex() >= 1 ? "text-gray-900": "text-gray-500")}>Duplicate</div>
          </div>
          <div className={"ml-4 pt-2 space-y-6 " + (currentStep != "notion_template_duplication" ? 'hidden': '')}>
            <div className="m-2">
              <ol className="list-decimal space-y-4">
                <li>
                  <div className="space-x-2">
                    <p>Open Notion template</p>
                    <a target="blank"
                    className="flex items-center mt-2 w-24 bg-gray-700 hover:bg-gray-600 hover:text-gray-50 rounded p-2 text-white"
                    href="#"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      <p>Template</p>
                    </a>
                  </div>
                </li>
                <li>
                  Click on Duplicate which is at the top right.
                </li>
                <li>
                  Check if this template is available in your workspace.
                </li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className={"p-4 pl-2 items-center " + (getCurrentStepIndex() == 2 && "bg-gray-200 rounded-r-md h-80")}>
          <div className="flex items-center">
            <div className={"flex place-items-center content-center justify-center w-10 h-10 border-2 rounded-full text-center " + (getCurrentStepIndex() > 2 ? "bg-gray-900": "bg-white") + " " + (getCurrentStepIndex() >= 2 ? "border-gray-900" : "border-gray-400") }>
              {
                getCurrentStepIndex() > 2 ?
                <CheckIcon className="text-white h-5 w-5" />:
                <div className={getCurrentStepIndex() == 2 ? "text-gray-900": "text-gray-500"}>03</div>
              }
            </div>
            <div className={"pl-4 " + (getCurrentStepIndex() >= 2 ? "text-gray-900": "text-gray-500")}>Create Database</div>
          </div>
          <div className={"ml-4 pt-2 space-y-6 " + (currentStep != "notion_database" ? 'hidden': '')}>
            <div className="m-2">
              <ol className="list-decimal space-y-3">
                <li>
                  Go to the page that was created by duplicating the twitter template in the previous step.
                </li>
                <li>
                  Click on <span className="font-extrabold italic">Share</span> which is located at the top right.
                </li>
              </ol>
              <div className="my-6">
                <LinkIcon className="h-5 w-5 text-gray-900 inline" /> 
                <input type="text"
                  className={"ml-2 h-9 font-sans font-light pl-2 pr-2 w-5/6 sm:text-sm border rounded-md border-gray-300"} placeholder="Notion link">
                </input>
              </div>
            </div>
          </div>
        </div>

        <div className={"p-4 pl-2 h-full " + (currentStep != "complete" ? 'hidden': 'h-80')}>
            <img className="h-full w-full" src={confirmationIcon} />
            <div className="mt-4 text-lg text-center text-twitter-blue">Congratulations! You have completed the setup.</div>
          </div>
      </div>

      <div className="text-right flex px-8 py-2 space-x-8">
        {
          currentStep != 'complete' &&
          <button className="border-2 border-gray-700 rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={previousClickHandler} disabled={getCurrentStepIndex == 0}>
            <ArrowLeftIcon className="h-5 w-5"></ArrowLeftIcon>
          </button>
        }
        <button className="border border-gray-700 rounded p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={nextClickHandler} disabled={getCurrentStepIndex == steps.length - 1}>
          <ArrowRightIcon className="h-5 w-5"></ArrowRightIcon>
        </button>
        <button className="border border-gray-700 rounded p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={() => setCurrentStep(steps[0])}>Reset</button>
      </div>
    </div>
  )
}

function Steps1() {
  const steps = ["notion_integration", "notion_template_duplication", "notion_database", "complete"];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [errorMsg, setErrorMsg] = useState("");

  const getCurrentStepIndex = () => {
    return steps.indexOf(currentStep);
  }

  const previousClickHandler = () => {
    let currentStepIndex = getCurrentStepIndex();
    let newStepIndex = currentStepIndex - 1;

    if(newStepIndex >= 0) {
      setCurrentStep(steps[newStepIndex]);
    }
  }

  const nextClickHandler = () => {
    let currentStepIndex = getCurrentStepIndex();
    let newStepIndex = currentStepIndex + 1;

    if(newStepIndex < steps.length) {
      let nextStep = steps[newStepIndex];
      setCurrentStep(nextStep);
    }
  }

  return (
    <div className="hidden md:block md:max-w-2xl xl:max-w-4xl mx-auto mt-12">
      <div className="flex border border-gray-300 rounded-md shadow-sm divide-x divide-gray-300">
        <div className={"p-4 pl-8 flex-1 flex space-x-6 items-center " + (getCurrentStepIndex() == 0 && "bg-gray-200 rounded-l-md") }>
          <div className={"flex place-items-center content-center justify-center w-10 h-10 border-2 border-gray-900 rounded-full text-center " + (getCurrentStepIndex() > 0 ? "bg-gray-900": "bg-white") }>
            <div>
              {
                getCurrentStepIndex() > 0 ?
                <CheckIcon className="text-white h-5 w-5" />: 
                <div className={getCurrentStepIndex() == 0 ? "text-gray-500": "text-gray-500"}>01</div>
              }
            </div>
          </div>
          <div className={getCurrentStepIndex() >= 0 ? "text-gray-900": "text-gray-500"}>Notion Integration</div>
        </div>
        
        <div className={"p-4 pl-8 flex-1 flex space-x-6 items-center " + (getCurrentStepIndex() == 1 && "bg-gray-200")}>
          <div className={"flex place-items-center content-center justify-center w-10 h-10 border-2 rounded-full text-center "  + (getCurrentStepIndex() > 1 ? "bg-gray-900": "bg-white") + " " + (getCurrentStepIndex() >= 1 ? "border-gray-900" : "border-gray-400") }>
            {
              getCurrentStepIndex() > 1 ?
              <CheckIcon className="text-white h-5 w-5" />: 
              <div className={getCurrentStepIndex() == 1 ? "text-gray-500": "text-gray-500"}>02</div>
            }
          </div>
          <div className={getCurrentStepIndex() >= 1 ? "text-gray-900": "text-gray-500"}>Duplicate</div>
        </div>
        
        <div className={"p-4 pl-8 flex-1 flex space-x-6 items-center " + (getCurrentStepIndex() == 2 && "bg-gray-200 rounded-r-md")}>
          <div className={"flex place-items-center content-center justify-center w-10 h-10 border-2 rounded-full text-center " + (getCurrentStepIndex() > 2 ? "bg-gray-900": "bg-white") + " " + (getCurrentStepIndex() >= 2 ? "border-gray-900" : "border-gray-400") }>
            {
              getCurrentStepIndex() > 2 ?
              <CheckIcon className="text-white h-5 w-5" />:
              <div className={getCurrentStepIndex() == 2 ? "text-gray-900": "text-gray-500"}>03</div>
            }
          </div>
          <div className={getCurrentStepIndex() >= 2 ? "text-gray-900": "text-gray-500"}>Create Database</div>
        </div>
      </div>

      <div className="mt-10 h-80 border rounded-md shadow">
        <div className="m-10 h-36 text-sm">
          <div className={"space-y-6 " + (currentStep != "notion_integration" ? 'hidden': '')}>
            <div className="ml-2">
              <DocumentTextIcon className="h-5 w-5 text-gray-400 inline" /> 
              <input type="text" 
                className={"ml-2 h-7 font-sans font-light pl-2 pr-2 w-5/6 sm:text-sm border rounded-md border-gray-300"} placeholder="Workspace name"
              ></input>
            </div>
            <div className="ml-2">
              <LinkIcon className="h-5 w-5 text-gray-400 inline" /> 
              <input type="text" 
                className={"ml-2 h-7 font-sans font-light pl-2 pr-2 w-5/6 sm:text-sm border rounded-md border-gray-300"} placeholder="Integration token"
              ></input>
            </div>
          </div>
          <div className={currentStep != "notion_template_duplication" ? 'hidden': ''}>
            <div className="m-10">
              <ol className="list-decimal space-y-6">
                <li>
                  <div className="flex items-center space-x-2">
                    <p>Open Notion template</p>
                    <a target="blank"
                    className="flex items-center bg-gray-700 hover:bg-gray-600 hover:text-gray-50 rounded p-2 text-white"
                    href="#"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      <p>Template</p>
                    </a>
                  </div>
                </li>
                <li>
                  Click on Duplicate which is located in the top right.
                </li>
                <li>
                  Verify that you have this template in your Notion workspace.
                </li>
              </ol>
            </div>
          </div>
          <div className={currentStep != "notion_database" ? 'hidden': ''}>
            <div className="m-8">
              <ol className="ml-5 list-decimal space-y-3">
                <li>
                  Go to the page that was created by duplicating the twitter template in the previous step.
                </li>
                <li>
                  Click on <span className="font-extrabold italic">Share</span> which is located at the top right.
                </li>
              </ol>
              <div className="my-6">
                <LinkIcon className="h-5 w-5 text-gray-900 inline" /> 
                <input type="text"
                  className={"ml-2 h-9 font-sans font-light pl-2 pr-2 w-5/6 sm:text-sm border rounded-md border-gray-300"} placeholder="Notion link">
                </input>
                
              </div>
            </div>
          </div>
          <div className={"h-full " + (currentStep != "complete" ? 'hidden': '')}>
            <img className="h-full w-full" src={confirmationIcon} />
            <div className="mt-4 text-lg text-center text-twitter-blue">Congratulations! You have completed the setup.</div>
          </div>
        </div>
        <div className="px-8 h-2 text-right font-medium tracking-wide text-red-500 text-xs">
          {errorMsg}
        </div>
        <div className="text-right px-8 py-2 space-x-8">
          {
            currentStep != 'complete' &&
            <button className="border-2 border-gray-700 rounded p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={previousClickHandler} disabled={getCurrentStepIndex == 0}>Previous</button>
          }
          <button className="border border-gray-700 rounded p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={nextClickHandler} disabled={getCurrentStepIndex == steps.length - 1}>Next</button>
          <button className="border border-gray-700 rounded p-2 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={() => setCurrentStep(steps[0])}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default function navSteps() {
  return (
    <div className="pt-20">
      <h3 className="text-center mb-4 text-xl font-normal">Navigation Steps</h3>
      <Steps1></Steps1>
      <Steps1Mobile></Steps1Mobile>
    </div>
  )
}
