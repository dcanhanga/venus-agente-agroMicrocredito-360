import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { CooperativesPage } from './CooperativesPage'
import { FinancialInstitutionsPage } from './FinancialInstituition'
import { UsersPage } from './UserPage'
import { CooperativaUtilizadorPage } from './CooperativeMemberPage'

export function CooperativesTab() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Cooperativas</Tab>
          <Tab>Instituições Financeiras</Tab>
          <Tab>Utilizadores</Tab>
          <Tab>Membros da Cooperativa</Tab>
        </TabList>

        <TabPanel>
          <CooperativesPage />
        </TabPanel>
        <TabPanel>
          <FinancialInstitutionsPage />
        </TabPanel>
        <TabPanel>
          <UsersPage />
        </TabPanel>
        <TabPanel>
          <CooperativaUtilizadorPage />
        </TabPanel>
      </Tabs>
    </>
  )
}
