import React, { ReactElement } from 'react'
import clsx from 'clsx'
/**
 * A collection of layout components, copied then bastardized
 * from Every-Layout.dev examples
 */
import styles from './layout.module.css'

interface WrapperProps {
    className?: string
}
/**
 * A div (non-semantic) style box, set to fill out body space
 * and wrap our main page components
 */
export const PageWrapper: React.FunctionComponent<WrapperProps> = ({
    children,
    className,
}) => <div className={clsx(styles.pageWrapper, className)}>{children}</div>

interface withSideBarProps {
    className?: string
    children: ReactElement
    sidebar: ReactElement
}

export const WithRightSidebar: React.FunctionComponent<withSideBarProps> = (
    props,
) => (
    <div className={clsx(styles.withSidebar, props.className)}>
        <div>
            <div>{props.sidebar}</div>
            <div>{props.children}</div>
        </div>
    </div>
)
