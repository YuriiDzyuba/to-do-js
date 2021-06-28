export const getSortedNotes = (state) => {
    let sortedNotes = {
        byGroup:
            {
                active: [],
                archived: []
            },
        byCategory: {}

    }

    Object.values(state).forEach(e => {
            e.isActive
                ? sortedNotes.byGroup.active.push(e)
                : sortedNotes.byGroup.archived.push(e)

            if (e.category) {
                if (sortedNotes.byCategory[e.category]) {
                    e.isActive
                        ? sortedNotes.byCategory[e.category].active = sortedNotes.byCategory[e.category].active + 1
                        : sortedNotes.byCategory[e.category].archived = sortedNotes.byCategory[e.category].archived + 1
                } else {
                    sortedNotes.byCategory[e.category] = {active: 0, archived: 0}
                    e.isActive
                        ? sortedNotes.byCategory[e.category].active = 1
                        : sortedNotes.byCategory[e.category].archived = 1
                }
            }
        }
    )
    return sortedNotes
}
