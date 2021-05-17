import React from "react"
import BoxFull from "../base/BoxFull"
import FormLabelled from "../base/FormLabelled"
import FormLabel from "../base/formparts/FormLabel"
import InputWithIcon from "../base/InputWithIcon"
import { faBackward, faFolder, faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons"
import Radio from "../base/Radio"
import Button from "../base/Button"
import useRepositoryEditor from "../../hooks/useRepositoryEditor"
import FormAlert from "../base/formparts/FormAlert"
import goToOnSuccess from "../../utils/goToOnSuccess"
import { useHistory } from "react-router"


/**
 * A {@link BoxFull} allowing the user to save the changes made in the current {@link RepositoryEditor}.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function BoxRepositoryCreate({ ...props }) {
    const {
        id,
        evaluationMode,
        setEvaluationMode,
        name,
        setName,
        save,
        revert,
        error,
    } = useRepositoryEditor()

    const history = useHistory()

    return (
        <BoxFull header={"Crea repository"} {...props}>
            <FormLabelled
                onSubmit={e => {
                    e.preventDefault()
                    save()
                }}
            >
                <FormLabel htmlFor={"repo-name"} text={"Nome repository"}>
                    <InputWithIcon
                        id={"repo-name"}
                        icon={faFolder}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormLabel>
                <FormLabel htmlFor={"filter-mode"} text={"Richiedi"}>
                    <label>
                        <Radio
                            name={"filter-mode"}
                            onChange={() => setEvaluationMode(0)}
                            checked={evaluationMode === 0}
                        />
                        Almeno una cond.
                    </label>
                    &nbsp;
                    <label>
                        <Radio
                            name={"filter-mode"}
                            onChange={() => setEvaluationMode(1)}
                            checked={evaluationMode === 1}
                        />
                        Tutte le cond.
                    </label>
                </FormLabel>
                {error ?
                 <FormAlert color={"Red"}>
                     {error.toString()}
                 </FormAlert>
                       : null}
                {id ?
                 <>
                     <Button
                         style={{ "gridColumn": "1" }}
                         icon={faBackward}
                         color={"Red"}
                         onClick={() => revert()}
                     >
                         Annulla modifiche
                     </Button>
                     <Button
                         style={{ "gridColumn": "2" }}
                         icon={faPencilAlt}
                         color={"Green"}
                         onClick={_ => goToOnSuccess(save, history, "/repositories")()}
                     >
                         Salva modifiche
                     </Button>
                 </>
                    :
                 <Button
                     style={{ "gridColumn": "1 / 3" }}
                     icon={faPlus}
                     color={"Green"}
                     onClick={_ => goToOnSuccess(save, history, "/repositories")()}
                 >
                     Crea repository
                 </Button>
                }

            </FormLabelled>
        </BoxFull>
    )
}